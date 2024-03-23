import random
import time

def encode(word):
    hashWord = random.choice(WORDS) #-random hashWord generated to encode
    i = 0
    for c in hashWord: #convert hashWord to number
        i += ord(c)
    encodedList = [".", hashWord]
    for c in word:
        j = ord(c)
        index = round(i*j/3) #-each letter encoded into word by hashWord
        encodedWord = WORDS[index]
        encodedList.append(encodedWord)
    return (encodedList) #-return hashWord followed by each encoded letter (list of strings)

def transmit():
    f1 = open("next.txt", "r")#get current word
    currentWord = f1.readline()
    f1.close()
    f2 = open("next.txt", "w")#set random next word, can be manually overwritten by server admin
    f2.write(random.choice(WORDS))
    wordList = encode(currentWord)#encode current word as a group of words
    for w in wordList:
        time.sleep(3)
        f3 = open("crypt.txt", "w") #write to txt, for js import
        f3.write(w)
        f3.close()
    transmit()

WORDS = open("list.txt").read().splitlines()
transmit()