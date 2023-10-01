import re
from gensim.models import Word2Vec
import re
import nltk
import numpy as np
import pandas as pd
from collections import Counter 

nltk.download('wordnet')

lst_stopwords = nltk.corpus.stopwords.words('russian')
lst_stopwords.extend(['…', '«', '»', '...'])

import tensorflow as tf
from tensorflow.keras import layers, models

from .services import vectorize, utils_preprocess_text

def get_pred(w2v_model, sgd_model, text=[]):       
    text=['''Классификация текста с помощью нейронной сети на Java / Хабр''']
    text_prep=pd.DataFrame(text,columns=['text'])
    text_prep['clean']=text_prep['text'].apply(lambda x: utils_preprocess_text(x, flg_stemm=True, flg_lemm=True, lst_stopwords=lst_stopwords))
    vec_text=vectorize(text_prep['text'], model=w2v_model)

    pr=sgd_model.predict(vec_text)

    return pr



