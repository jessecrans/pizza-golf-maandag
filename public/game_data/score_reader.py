import pytesseract
from PIL import Image
import os

date = "01-01-2024"

image = Image.open(f"scores/{date}.png")
image_columns = []
for i in range(18):
    image_columns.append(image.crop((i * 50, 0, (i + 1) * 50, image.size[1])))

folder = f"./scores/{date}_columns/"
if not os.path.isdir(folder):
    os.mkdir(folder)
for i, image in enumerate(image_columns):
    image.save(folder + "column_" + str(i) + ".png")

text = pytesseract.image_to_string(image)
