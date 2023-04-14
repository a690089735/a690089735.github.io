import torch
from torch import nn
from torch import optim

class LinearRegression(nn.Module):
    def __init__(self):
        super(LinearRegression, self).__init__()
        self.linear = nn.Linear(1, 1)  # 定义一个线性层

    def forward(self, x):
        out = self.linear(x)
        return out

model = LinearRegression()  # 创建一个线性回归模型
optimizer = optim.SGD(model.parameters(), lr=0.01)  # 创建一个梯度下降优化器，学习率为0.01

x_data = torch.randn(100, 1)
y_data = 3 * x_data + 2  # 生成y = 3x + 2的数据

num_epochs = 1000  # 迭代次数
for epoch in range(num_epochs):
    inputs = x_data
    labels = y_data

    # 前向传播
    outputs = model(inputs)
    loss = nn.functional.mse_loss(outputs, labels)  # 计算MSE损失

    # 反向传播
    optimizer.zero_grad()  # 清空梯度缓存
    loss.backward()  # 计算梯度
    optimizer.step()  # 更新参数

    # 打印损失值
    if (epoch + 1) % 50 == 0:
        print('Epoch [{}/{}], Loss: {:.4f}'.format(epoch+1, num_epochs, loss.item()))

# 预测
x_test = torch.Tensor([[1.0], [2.0], [3.0]])
y_test = model(x_test)
print(y_test)