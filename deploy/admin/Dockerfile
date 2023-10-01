FROM python:3.10-alpine

WORKDIR /admin

COPY . /admin

ENV FLASK_APP app.py

RUN pip install --upgrade pip && pip install -r requirements.txt