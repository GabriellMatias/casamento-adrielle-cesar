from PIL import Image, ImageDraw, ImageFont
import os

base = "/Users/gabriellmatias/Desktop/casamento-adrielle-cesar/public/images"

placeholders = [
    ("placeholder-couple.jpg", (800, 800), "#E8C4A8", "Foto do Casal"),
    ("placeholder-daughter.jpg", (600, 600), "#D4B96B", "Foto da Helena"),
    ("placeholder-chapel.jpg", (800, 600), "#8B9A7B", "Capela do Divino"),
    ("placeholder-farm.jpg", (800, 600), "#C4A44A", "Chacara Vo Joana"),
]

for name, size, color, text in placeholders:
    img = Image.new("RGB", size, color)
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (size[0] - tw) // 2
    y = (size[1] - th) // 2
    draw.text((x, y), text, fill="#FFFFFF", font=font)
    draw.line([(0, 0), size], fill="#FFFFFF", width=1)
    draw.line([(size[0], 0), (0, size[1])], fill="#FFFFFF", width=1)
    img.save(os.path.join(base, name), quality=85)
    print(f"Created {name}")
