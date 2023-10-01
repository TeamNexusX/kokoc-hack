from flask import (
    request,
    jsonify,
    abort
)

import requests
from bs4 import BeautifulSoup
import re

from src import app
from src.models import db,Category

from src.ml.main import get_pred,Word2Vec,models


@app.route('/check_domain',methods=['GET','POST'])
def check_domain():
    url=request.get_json()['url']
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        page_text = soup.get_text()
        page_text = list(re.sub(r'\s+', ' ', page_text).strip().encode())
        result = get_pred(w2v_model=Word2Vec,sgd_model=models,text=page_text)
    else:
        abort(response.status_code)
    return result