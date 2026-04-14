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

resource "aws_s3_bucket" "fei-bucket" {
  bucket = "fire-exposure-index.com"
}

resource "aws_s3_bucket" "fei-bucket-red" {
  bucket = "www.fire-exposure-index.com"
}