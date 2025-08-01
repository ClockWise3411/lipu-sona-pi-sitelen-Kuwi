# What is sitelen Kuwi?

**sitelen Kuwi**, also referred to by some as sitelen leko, is a script for **toki pona**. I originally designed this script for a separate project that was similar to toki pona, but after putting the project on hiatus, I decided to repurpose the script. 

## Why not just use sitelen pona? 
Unfortunately, I’ve never been a huge fan of sitelen pona, both aesthetically and functionally. This isn't to say sitelen pona is ugly or doesn't function well, but aesthetically, I personally have other preferences, and functionally, sitelen pona has its own issues that I personally wanted to address, which i will go into shortly.  

## What were my goals when creating this script?
I have always been somewhat dissatisfied with sitelen pona, and in my many years of attempts to discover what was behind that sentiment and what I actually wanted out of a toki pona script, I tried to develop various other ways to write toki pona. Eventually, I found myself returning to two issues time and time again: **ambiguity** and **readability**. but what does this mean?

### Ambiguity
toki pona is naturally an ambiguous language, which is **completely fine**. I have no problem with this in general, but what if there was a way to eliminate _some_ ambiguity without changing the way the language functions at all? What if, when reading and writing (which are the main ways through which users consume material for toki pona), there were intuitive visual clues that could reduce some of this ambiguity? For example, what if we could more easily see if a word is acting as a preposition or noun and more easily show the relationship between different words? This is a question I toyed with in many different ways in my many different attempts to create a new writing system.

### Readability
I consider toki pona to have three major categories for the syntactic role a word can play: 
- particles,
- content words, and 
- (what I call) function words.

What does this have to do with legibility? Well, let’s take a detour to Japanese and try to understand where I’m coming from. For those of you who unfamiliar with how the language works, Japanese combines three separate writing systems, each with their own function for written communication. The writing systems are as follows:
- **Kanji** are characters borrowed from Chinese which carry semantic meaning.
  - For example, 魚 is the character for fish. This character represents a meaning, but not necessarily a pronunciation.
- **Hiragana** is script native to Japan (although derived from cursive Kanji) that represents the language phonetically.
  - For example, the characters <ruby>ひ<rt>hi</rt>ら<rt>ra</rt>が<rt>ga</rt>な<rt>na</rt></ruby> each represent one syllable, and when put together, they make up the word "hiragana".
- **Katakana** is similar in function to Hiragana but different in use. It is mainly used for more recent loan words (as compared to Kanji).

Along with just the functional differences, there are also clear visual differences: Kanji tend to be more complex with many straight and angled lines while Hiragana tend to be curvier and more simple in comparison. Here is an example with Kanji in <span class="red">red</span> and Hiragana in <span class="yellow">yellow</span>:   
> <span class="red">私</span><span class="yellow">は</span><span class="red">食堂</span><span class="yellow">で</span><span class="red"></span><span class="yellow">を</span><span class="red">食</span><span class="yellow">べます</span>。  

Hopefully, it is clear from this example how these visual cues can quickly tell the reader where semantic meaning ends and grammar begins, which is exactly what I wanted to have as well. I wanted visual cues that could quickly tell the reader what part of toki pona’s grammatical patterns they are looking at. 

## Summary
sitelen Kuwi is a project I undertook to create a script that is much easier to parse grammatically, such that readers can easily pick up on the functions and relationships of different words through orthography alone. Of course, this does not take away from my other objective of creating something I personally find aesthetically pleasing and fun to play with.
