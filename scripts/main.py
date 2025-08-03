CONTENT = ['akesi', 'ala', 'alasa', 'ale', 'anpa', 'ante', 'awen', 'epiku', 'esun', 'ijo', 'ike', 'ilo', 'insa', 'jaki', 'jan', 'jasima', 'jelo', 'jo', 'kala', 'kalama', 'kama', 'kasi', 'ken', 'kepeken', 'kijetesantakalu', 'kili', 'kipisi', 'kiwen', 'ko', 'kokosila', 'kon', 'ku', 'kule', 'kulupu', 'kute', 'kuwi', 'lanpan', 'lape', 'lawa', 'leko', 'len', 'lete', 'lili', 'linja', 'lipu', 'loje', 'lon', 'luka', 'lukin', 'lupa', 'ma', 'mama', 'mani', 'meli', 'meso', 'mi', 'mije', 'misikeke', 'moku', 'moli', 'monsi', 'monsuta', 'mu', 'mun', 'musi', 'mute', 'namako', 'nanpa', 'nasa', 'nasin', 'nena', 'ni', 'nimi', 'noka', 'oko', 'olin', 'ona', 'open', 'pakala', 'pali', 'palisa', 'pan', 'pana', 'pilin', 'pimeja', 'pini', 'pipi', 'poka', 'pona', 'pu', 'sama', 'seli', 'selo', 'seme', 'sewi', 'sijelo', 'sike', 'sin', 'sina', 'sinpin', 'sitelen', 'soko', 'sona', 'soweli', 'suli', 'suno', 'supa', 'suwi', 'tan', 'tawa', 'telo', 'tenpo', 'toki', 'tomo', 'tonsi', 'tu', 'unpa', 'uta', 'utala', 'walo', 'wan', 'waso', 'wawa', 'weka', 'wile']
PARTICLES = ['e', 'la', 'li', 'o', 'pi']
FUNCTION = ['a', 'anu', 'en', 'kin', 'taso', 'n-']
NAME = ['kuwi']
CONSONANTS = 'ptkmnlwjs'
VOWELS = list('aeiou')
PUNCTUATION = '.?!'

print("# Dictionary")
print("## Glyphs")
print("### Content Words")
print("| sitelen Lasina | sitelen Kuwi |")
print("| :-: | :-: |")
for word in CONTENT:
    print(f"| {word} | <span class=\"kuwi big center\">{word}-</span> |")
print("### Particles")
print("| sitelen Lasina | sitelen Kuwi |")
print("| :-: | :-: |")
for word in PARTICLES:
    print(f"| {word} | <span class=\"kuwi big center\">{word}</span> |")
print("### Function Words")
print("| sitelen Lasina | sitelen Kuwi | sitelen Kuwi (horizontal) |")
print("| :-: | :-: | :-: |")
for word in FUNCTION:
    print(f"| {word.strip('-')} | <span class=\"kuwi big center\">{word}</span> | <span class=\"kuwi big center\">{word}--</span> |")
print("### Name Glyphs")
print("| sitelen Lasina | sitelen Kuwi |")
print("| :-: | :-: |")
for word in NAME:
    print(f"| {word} | <span class=\"kuwi big center\">{word}-</span> |")
print("## Graphemes")
print("### Consonants")
print("| sitelen Lasina | sitelen Kuwi |")
print("| :-: | :-: |")
for consonant in CONSONANTS:
    print(f"| {consonant} | <span class=\"kuwi big center\">{consonant.upper()}-</span> |")
print("### Vowels")
print("| sitelen Lasina | sitelen Kuwi | sitelen Lasina with n | sitelen Kuwi with n |")
print("| :-: | :-: | :-: | :-: |")
for vowel in VOWELS:
    print(f"| {vowel.strip('-')} | <span class=\"kuwi big center\">{vowel.upper()}-</span> | {vowel.strip('-')}n | <span class=\"kuwi big center\">{vowel.upper()}N-</span> |")
print("## Punctuation")
print("| sitelen Lasina | sitelen Kuwi |")
print("| :-: | :-: |")
for punctuation in PUNCTUATION:
    print(f"| {punctuation} | <span class=\"kuwi big center\">{punctuation}</span> |")
