from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin
from products_data import data

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route('/')
def index():
    return {"message": "success"}


class Product(Resource):
    def get(self, product_type, product_id):
        for product in data[product_type]:
            if product_id == product["id"]:
                selected_product = product

        return selected_product


class ProductList(Resource):
    def get(self):
        return data


api.add_resource(ProductList, '/product')
api.add_resource(Product, '/product/find/<string:product_type>/<int:product_id>')


if __name__ == '__main__':
    app.run()