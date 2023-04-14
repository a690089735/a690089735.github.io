import pygame
import random

pygame.init()

width = 500
height = 500
win = pygame.display.set_mode((width, height))
pygame.display.set_caption("Snake Game")

class Snake:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.width = 10
        self.height = 10
        self.vel = 10
        self.direction = "right"
        self.body = [(x, y), (x-self.vel, y), (x-(2*self.vel), y)]

    def draw(self, win):
        for block in self.body:
            pygame.draw.rect(win, (0, 255, 0), (block[0], block[1], self.width, self.height))

    def move(self):
        keys = pygame.key.get_pressed()

        if keys[pygame.K_LEFT] and self.direction != "right":
            self.direction = "left"
        elif keys[pygame.K_RIGHT] and self.direction != "left":
            self.direction = "right"
        elif keys[pygame.K_UP] and self.direction != "down":
            self.direction = "up"
        elif keys[pygame.K_DOWN] and self.direction != "up":
            self.direction = "down"

        if self.direction == "right":
            self.x += self.vel
        elif self.direction == "left":
            self.x -= self.vel
        elif self.direction == "up":
            self.y -= self.vel
        elif self.direction == "down":
            self.y += self.vel

        self.body.insert(0, (self.x, self.y))
        self.body.pop()

class Food:
    def __init__(self):
        self.x = random.randrange(0, width-10, 10)
        self.y = random.randrange(0, height-10, 10)
        self.width = 10
        self.height = 10

    def draw(self, win):
        pygame.draw.rect(win, (255, 0, 0), (self.x, self.y, self.width, self.height))

def game_loop():
    snake = Snake(width/2, height/2)
    food = Food()
    score = 0

    clock = pygame.time.Clock()

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        win.fill((0, 0, 0))

        snake.draw(win)
        food.draw(win)

        snake.move()

        if snake.body[0][0] == food.x and snake.body[0][1] == food.y:
            food = Food()
            score += 1
            snake.body.append((snake.body[-1][0]-snake.vel, snake.body[-1][1]))

        if snake.body[0][0] < 0 or snake.body[0][0] > width-10 or snake.body[0][1] < 0 or snake.body[0][1] > height-10:
            pygame.quit()
            quit()

        for block in snake.body[1:]:
            if snake.body[0][0] == block[0] and snake.body[0][1] == block[1]:
                pygame.quit()
                quit()

        pygame.display.update()
        clock.tick(10)

game_loop()
