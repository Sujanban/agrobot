# import os
# from flask import Flask, jsonify, request
# from PIL import Image
# import torchvision.transforms.functional as TF
# import CNN
# import numpy as np
# import torch
# import pandas as pd
#
# disease_info = pd.read_csv('disease_info.csv', encoding='cp1252')
# supplement_info = pd.read_csv('supplement_info.csv', encoding='cp1252')
#
# model = CNN.CNN(39)
# model.load_state_dict(torch.load("model/plant_disease_model_1_latest.pt"))
# model.eval()
# def prediction(image_path):
#     image = Image.open(image_path)
#     image = image.resize((224, 224))
#     input_data = TF.to_tensor(image)
#     input_data = input_data.view((-1, 3, 224, 224))
#     output = model(input_data)
#     output = output.detach().numpy()
#     index = np.argmax(output)
#     return index
#
# app = Flask(__name__)
#
# @app.route('/')
# def home():
#     return jsonify({"message": "API is running"})
#
# @app.route('/submit', methods=['POST'])
# def submit():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file provided'}), 400
#
#     image = request.files['image']
#     filename = image.filename
#     file_path = os.path.join('static/uploads', filename)
#     os.makedirs(os.path.dirname(file_path), exist_ok=True)
#     image.save(file_path)
#
#     pred = prediction(file_path)
#     title = disease_info['disease_name'][pred]
#     description = disease_info['description'][pred]
#     prevent = disease_info['Possible Steps'][pred]
#     image_url = disease_info['image_url'][pred]
#     supplement_name = supplement_info['supplement name'][pred]
#
#     response_data = {
#         'title': title,
#         'description': description,
#         'prevent': prevent,
#         'image_url': image_url,
#         'supplement_name': supplement_name,
#     }
#     return jsonify({'res': response_data})
#
# if __name__ == '__main__':
#     app.run(debug=True)





import os
from flask import Flask, jsonify, request
from flask_cors import CORS  # Import the CORS class
from PIL import Image
import torchvision.transforms.functional as TF
import CNN
import numpy as np
import torch
import pandas as pd

# Load data from CSV files
disease_info = pd.read_csv('disease_info.csv', encoding='cp1252')
supplement_info = pd.read_csv('supplement_info.csv', encoding='cp1252')

# Load the CNN model
model = CNN.CNN(39)
model.load_state_dict(torch.load("model/plant_disease_model_1_latest.pt"))
model.eval()

# Define the prediction function
def prediction(image_path):
    image = Image.open(image_path)
    image = image.resize((224, 224))
    input_data = TF.to_tensor(image)
    input_data = input_data.view((-1, 3, 224, 224))
    output = model(input_data)
    output = output.detach().numpy()
    index = np.argmax(output)
    return index

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app, resources={r"/submit": {"origins": "http://localhost:5173"}})

@app.route('/')
def home():
    return jsonify({"message": "API is running"})

@app.route('/submit', methods=['POST'])
def submit():
    # Check if an image file was uploaded
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image = request.files['image']
    filename = image.filename
    file_path = os.path.join('static/uploads', filename)
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    image.save(file_path)

    # Perform prediction
    pred = prediction(file_path)
    title = disease_info['disease_name'][pred]
    description = disease_info['description'][pred]
    prevent = disease_info['Possible Steps'][pred]
    image_url = disease_info['image_url'][pred]
    supplement_name = supplement_info['supplement name'][pred]

    # Create the response data
    response_data = {
        'title': title,
        'description': description,
        'prevent': prevent,
        'image_url': image_url,
        'supplement_name': supplement_name,
    }
    return jsonify({'res': response_data})

if __name__ == '__main__':
    app.run(debug=True)
