FROM python:3.9-slim-buster

WORKDIR /api

COPY ./api/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./api .

EXPOSE 5000

CMD ["python", "main.py"]
