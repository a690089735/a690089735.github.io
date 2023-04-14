import torch

x = torch.rand(5, 3, 2)
print(x)

print(torch.cuda.is_available())

print(torch.__version__)

print(torch.version.cuda)
print(torch.backends.cudnn.version())
a = {"kk": 1}
f"{a['kk']}"
