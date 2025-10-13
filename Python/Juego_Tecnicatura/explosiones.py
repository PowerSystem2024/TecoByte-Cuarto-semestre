import os
from constantes import ASSETS_PATH

class Explosion:
  def __init__(self):
    self.image = [pygame.image.load(os.path.join(ASSETS_PATH, 'images', f'regularExplosion0{i:2}.png')) for i in range (9)]
    self.index = 0
    self.image = self.images[self.index]
    self.rect = self.image.get_rect(center=(x,y))
    self.frame_rate = 0 #Contador de los frames de la animación
    self.frames = 20 #Frames de la animiación
  
  def actualiar(self):
    self.frames_rate +=1
    if self.frame_rate >= self.frames:
      self.index += 1
      if self.index >= len(self.images):
        return False
      self.image = self.images[self.index]
    return True
  
  def dibujar (self,screen):
    screen.blit(self.image, self.rect.topleft)