def serialize_doc(doc) -> dict:
    if not doc:
        return doc
    doc["id"] = str(doc["_id"])
    del doc["_id"]
    return doc

def serialize_docs(docs) -> list:
    return [serialize_doc(doc) for doc in docs]
