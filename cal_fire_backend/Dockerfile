FROM python:3.9-slim

WORKDIR /api

COPY ./api/requirements.txt .

RUN apt-get update && apt-get install -y curl && pip install --no-cache-dir -r requirements.txt

COPY ./api .

EXPOSE 5000

CMD ["python", "main.py"]


