import pygame
import sys
import random
import os
from personaje import Personaje, Enemigo, Explosion
from constantes import

#Inicializa el juego

def mostrar_imagen_inicial(screen, imagen_path, duracion):
  imagen = pygame.image.load(imagen_path).bonvert()
  imagen = pygame.transform.scale(image, (SCREEN_WIDTH, SCREEN_HEIGHT))
  
  #Bucle para mostrar la imagen principal con una opacidad
  alpha = 255 #transparencia inicial completa
  Clock = pygame.time.Clock()
  
  tiempo_inicial = pygame.time.get_ticks()
  tiempo_total = duracion #Duración en milisegundos (8000 milisegundos para 8 segundos)

while pygame.time.get_ticks() - tiempo_inicial < tiempo_total:
  for event in pygame.event.get():
    if event.type == pygame.QUIT:
      pygame.quit
      sys.exit()