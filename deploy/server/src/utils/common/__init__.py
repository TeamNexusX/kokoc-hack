from sqlalchemy import *

def convertToJSON(obj):
        return {c.key: getattr(obj, c.key) for c in inspect(obj).mapper.column_attrs}
