import cv2  
import numpy as np  
from tensorflow.keras.models import load_model  

# Load the trained model
model = load_model("your_model.h5")

# Preprocess the image
def preprocess_image(image_path, target_size=(224, 224)):  
    image = cv2.imread("test.py")  # Read image
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert to RGB  
    image = cv2.resize(image, target_size)  # Resize  
    image = image / 255.0  # Normalize (if required by your model)  
    image = np.expand_dims(image, axis=0)  # Add batch dimension  
    return image  

# Predict if the image is real or fake
def predict_image(image_path):  
    image = preprocess_image(image_path)  
    prediction = model.predict(image)  
    confidence = float(prediction[0])  # Extract confidence score
    result = "Fake" if confidence > 0.5 else "Real"
    return result, confidence  

# Example usage
image_path = "test_image.jpg"  # Replace with your image path
result, confidence = predict_image(image_path)  
print(f"Prediction: {result} (Confidence: {confidence:.2f})")  
