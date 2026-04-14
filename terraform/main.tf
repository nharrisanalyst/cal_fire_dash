terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "us-west-1"
  access_key = ""
  secret_key = ""
}

variable "cidr" {
  default = "10.0.0.0/16"
}

resource "aws_vpc" "fire-exposure-index-vpc" {
  cidr_block = var.cidr
    tags = {
    Name = "fire-exposure-index-vpc"
  }
}

resource "aws_internet_gateway" "fei_igw" {
  vpc_id = aws_vpc.fire-exposure-index-vpc.id
  tags = {
    Name = "fei_igw"
  }
}

resource "aws_subnet" "fei_public" {
    vpc_id = aws_vpc.fire-exposure-index-vpc.id
    cidr_block = "10.0.1.0/24"
    availability_zone       = "us-west-1b"
    map_public_ip_on_launch = true
}

resource "aws_subnet" "fei_public_2" {
    vpc_id = aws_vpc.fire-exposure-index-vpc.id
    cidr_block = "10.0.4.0/24"
    availability_zone       = "us-west-1c"
    map_public_ip_on_launch = true
}


resource "aws_subnet" "fei_private_1" {
  vpc_id = aws_vpc.fire-exposure-index-vpc.id
  cidr_block = "10.0.2.0/24"
  availability_zone       = "us-west-1b"
}

resource "aws_subnet" "fei_private_2" {
  vpc_id = aws_vpc.fire-exposure-index-vpc.id
  cidr_block = "10.0.3.0/24"
  availability_zone       = "us-west-1c"
}

resource "aws_db_subnet_group" "fei_subnet_group_private" {
  name       = "fei-db-subnet-group"
  subnet_ids = [
    aws_subnet.fei_private_1.id,
    aws_subnet.fei_private_2.id
  ]

  tags = {
    Name = "FEI DB Subnet Group"
  }
}

resource "aws_route_table" "fei_public_route"{
    vpc_id = aws_vpc.fire-exposure-index-vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.fei_igw.id
    }
}

resource "aws_route_table_association" "fei_public_assoc" {
    subnet_id = aws_subnet.fei_public.id
    route_table_id = aws_route_table.fei_public_route.id
}

resource "aws_route_table_association" "fei_public_2_assoc" {
    subnet_id = aws_subnet.fei_public_2.id
    route_table_id = aws_route_table.fei_public_route.id
}

# Security group resources 
resource "aws_security_group" "fei_public_sg" {
  name="web"
  vpc_id = aws_vpc.fire-exposure-index-vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_vpc_security_group_ingress_rule" "http_in" {
  security_group_id = aws_security_group.fei_public_sg.id
  from_port         = 80
  to_port           = 80
  ip_protocol       = "tcp"
  cidr_ipv4         = "0.0.0.0/0"
  description       = "Allow HTTP from anywhere"
}

resource "aws_vpc_security_group_ingress_rule" "http_in_5000" {
  security_group_id = aws_security_group.fei_public_sg.id
  from_port         = 5000
  to_port           = 5000
  ip_protocol       = "tcp"
  cidr_ipv4         = "0.0.0.0/0"
  description       = "Allow HTTP from anywhere"
}

resource "aws_vpc_security_group_ingress_rule" "https_in" {
  security_group_id = aws_security_group.fei_public_sg.id
  from_port         = 443
  to_port           = 443
  ip_protocol       = "tcp"
  cidr_ipv4         = "0.0.0.0/0"
  description       = "Allow HTTPS from anywhere"
}

resource "aws_vpc_security_group_ingress_rule" "ssh_in" {
  security_group_id = aws_security_group.fei_public_sg.id
  from_port         = 22
  to_port           = 22
  ip_protocol       = "tcp"
  cidr_ipv4         = "207.183.235.210/32"
  description       = "Allow ssh from me"
}

resource "aws_vpc_security_group_ingress_rule" "allow_all_outbound" {
  security_group_id = aws_security_group.fei_public_sg.id
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
  description       = "Allow all outbound traffic"
}

resource "aws_security_group" "rds_sg" {
  name        = "rds_sg"
  description = "Allow Postgres access from ECS tasks"
  vpc_id      = aws_vpc.fire-exposure-index-vpc.id

  ingress {
    description      = "Allow Postgres inbound from ECS tasks"
    from_port        = 5432
    to_port          = 5432
    protocol         = "tcp"
    security_groups  = [aws_security_group.ecs_sg.id]
  }

  

  ingress {
  description      = "Allow Postgres from API Service"
  from_port        = 5432
  to_port          = 5432
  protocol         = "tcp"
  security_groups  = [aws_security_group.ecs_api_sg.id]
}

  tags = {
    Name = "rds_sg"
  }
}

resource "aws_db_instance" "fei_db" {
    allocated_storage = 10
    db_name = "fei_db"
    engine = "postgres"
    engine_version = "15.12"
    instance_class = "db.t3.micro"
    username = "CAL_FIRE_DASH_ADMIN"
    password="Qw704SgOiW&M2Ii_pMrI9Ys"
    skip_final_snapshot = true
    publicly_accessible  = false
    db_subnet_group_name = aws_db_subnet_group.fei_subnet_group_private.name
    vpc_security_group_ids = [aws_security_group.rds_sg.id]
}

resource "aws_ecr_repository" "etl_repo" {
  name = "fei-etl"
}

resource "aws_ecs_cluster" "etl_pipeline_cluster" {
  name = "etl_pipeline_cluster"
}

resource "aws_eip" "nat" {
  domain   = "vpc"
}

resource "aws_nat_gateway" "nat" {
  allocation_id = aws_eip.nat.id
  subnet_id     = aws_subnet.fei_public.id
}

resource "aws_route_table" "private" {
  vpc_id = aws_vpc.fire-exposure-index-vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat.id
  }
}

resource "aws_route_table_association" "private" {
  subnet_id      = aws_subnet.fei_private_1.id
  route_table_id = aws_route_table.private.id
}

resource "aws_route_table_association" "private_2" {
  subnet_id      = aws_subnet.fei_private_2.id
  route_table_id = aws_route_table.private.id
}

resource "aws_iam_role" "ecs_task_execution" {
    name="ecsTaskExecution"

    assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Effect    = "Allow",
      Principal = { Service = "ecs-tasks.amazonaws.com" },
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution_policy" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name              = "/ecs/etl-task-logs"
  retention_in_days = 1
}

resource "aws_ecs_task_definition" "etl_task" {
  family                   = "etl-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  

  container_definitions = jsonencode([
    {
      name      = "etl-container",
      image     = "112609774376.dkr.ecr.us-west-1.amazonaws.com/fei-etl:0.31",
      essential = true,
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/etl-task-logs"
          "awslogs-region"        = "us-west-1"         # your AWS region
          "awslogs-stream-prefix" = "etl"               # prefix for log streams
        }
      }
      environment = [
        { name = "POSTGRES_HOST", value = aws_db_instance.fei_db.address },
        { name = "POSTGRES_USER", value = "CAL_FIRE_DASH_ADMIN" },
        { name = "POSTGRES_PASSWORD", value = "Qw704SgOiW&M2Ii_pMrI9Ys" },
        { name = "POSTGRES_DB", value = "fei_db" },
        { name = "POSTGRES_PORT", value = "5432" }

      ]
    }
  ])
}

resource "aws_security_group" "ecs_sg" {
  name        = "ecs_sg"
  description = "Security group for ECS tasks"
  vpc_id      = aws_vpc.fire-exposure-index-vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow inbound traffic if needed (e.g., if tasks expose ports)
  # Otherwise, you can leave ingress empty if your tasks don't receive inbound traffic.
  # Example:
  # ingress {
  #   from_port   = 80
  #   to_port     = 80
  #   protocol    = "tcp"
  #   cidr_blocks = ["0.0.0.0/0"]
  # }

  tags = {
    Name = "ecs_sg"
  }
}

resource "aws_security_group" "ecs_api_sg" {
  name        = "ecs_api_sg"
  description = "Security group for ECS tasks"
  vpc_id      = aws_vpc.fire-exposure-index-vpc.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "ecs_sg"
  }
}

resource "null_resource" "run_etl_task" {
  #   triggers = {
  #       always_run = timestamp()
  # }
  provisioner "local-exec" {
    command = <<EOT
      aws ecs run-task \
        --cluster ${aws_ecs_cluster.etl_pipeline_cluster.name} \
        --launch-type FARGATE \
        --task-definition ${aws_ecs_task_definition.etl_task.family} \
        --network-configuration "awsvpcConfiguration={subnets=[${aws_subnet.fei_private_1.id}],securityGroups=[${aws_security_group.ecs_sg.id}],assignPublicIp=DISABLED}" \
    EOT
  }

  depends_on = [aws_ecs_task_definition.etl_task]
}


resource "aws_ecr_repository" "api_repo" {
  name = "fei-api"
}

resource "aws_ecs_cluster" "fei_api_cluster" {
  name = "fei_api_cluster"
}

resource "aws_cloudwatch_log_group" "ecs_api_log_group" {
  name              = "/ecs/fei-api-logs"
  retention_in_days = 1
}

resource "aws_ecs_task_definition" "api_task" { 
  family                   = "api-task"
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  

  container_definitions = jsonencode([
    {
      name      = "fei-api-container",
      image     = "112609774376.dkr.ecr.us-west-1.amazonaws.com/fei-api:0.5",
      essential = true,
      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = "/ecs/fei-api-logs"
          "awslogs-region"        = "us-west-1"         # your AWS region
          "awslogs-stream-prefix" = "fei-api"               # prefix for log streams
        }
      },
      portMappings = [
        {
          containerPort = 5000
          hostPort      = 5000
          protocol      = "tcp"
        }
      ],
      environment = [
        { name = "POSTGRES_HOST", value = aws_db_instance.fei_db.address },
        { name = "POSTGRES_USER", value = "CAL_FIRE_DASH_ADMIN" },
        { name = "POSTGRES_PASSWORD", value = "Qw704SgOiW&M2Ii_pMrI9Ys" },
        { name = "POSTGRES_DB", value = "fei_db" },
        { name = "POSTGRES_PORT", value = "5432" },
        { name = "EMAIL_NAME", value = "reachoutatportal@gmail.com" },
        { name = "EMAIL_PASSWORD", value = "pflw oiny xszn ccjw" }

      ]
    }
  ])
}

##load balancer 
resource "aws_security_group" "api_lb_g" {
  name        = "alb-sg"
  description = "Allow HTTP access"
  vpc_id      = aws_vpc.fire-exposure-index-vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow from anywhere (public internet)
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_lb" "api_lb" {
  name="api-lb"
  internal = false
  load_balancer_type = "application"
  security_groups = [aws_security_group.api_lb_g.id]
  subnets = [aws_subnet.fei_public.id, aws_subnet.fei_public_2.id]
}

resource "aws_lb_target_group" "api_lb_tg" {
    name="fei-api-lb-tg"
    port = 5000
    protocol    = "HTTP"
    target_type = "ip"
    vpc_id = aws_vpc.fire-exposure-index-vpc.id

#     health_check {
#     path                = "/"
#     interval            = 30
#     timeout             = 5
#     healthy_threshold   = 2
#     unhealthy_threshold = 2
#     matcher             = "200-399"
#   }
}


resource "aws_lb_listener" "https_listener" {
  load_balancer_arn = aws_lb.api_lb.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"
  certificate_arn   = "arn:aws:acm:us-west-1:112609774376:certificate/4ff2e313-6489-414c-9a01-e59975387764"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.api_lb_tg.arn
  }
}

resource "aws_lb_listener" "http_redirect" {
  load_balancer_arn = aws_lb.api_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
    }
  }
}

resource "aws_ecs_service" "api_service" {
    triggers = {
        always_run = timestamp()
  }
  name="fei-api-service"
  cluster=aws_ecs_cluster.fei_api_cluster.id
  task_definition = aws_ecs_task_definition.api_task.arn
  desired_count = 1
  launch_type = "FARGATE"


  network_configuration {
    subnets =[
              aws_subnet.fei_public.id,
              aws_subnet.fei_public_2.id
              ]
    security_groups = [aws_security_group.ecs_api_sg.id]
    assign_public_ip = true
  }

  load_balancer {
  target_group_arn = aws_lb_target_group.api_lb_tg.arn
  container_name   = "fei-api-container"
  container_port   = 5000
}
 health_check_grace_period_seconds = 120
}