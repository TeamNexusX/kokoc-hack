FROM python:3.8

MAINTAINER [ VALIKO666 ]

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV FLASK_APP src/__init__.py

WORKDIR /backend

COPY . /backend

RUN pip install --upgrade pip && pip install -r requirements.txt