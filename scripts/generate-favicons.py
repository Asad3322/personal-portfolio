"""Generate proportional face-focused portrait icons using Pillow."""
from pathlib import Path
from PIL import Image
root = Path(__file__).resolve().parents[1]
portrait = Image.open(root / "src/components/assets/asad-portrait.png").convert("RGBA")
# Complete head, with square padding rather than stretching.
head = portrait.crop((80, 12, 330, 322))
icon = Image.new("RGBA", (330, 330), (0, 0, 0, 0))
icon.alpha_composite(head, (40, 10))
for name, size in {"favicon-16x16.png": 16, "favicon-32x32.png": 32, "favicon-48x48.png": 48, "apple-touch-icon.png": 180, "icon-192.png": 192, "icon-512.png": 512}.items():
    icon.resize((size, size), Image.Resampling.LANCZOS).save(root / "public" / name)
icon.save(root / "public/favicon.ico", sizes=[(n, n) for n in (16, 24, 32, 48, 64, 128, 256)])
print("Generated portrait icons.")
