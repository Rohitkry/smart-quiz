import json
import random

# Load questions from JSON file
with open(r"C:\Users\rohit\Desktop\coding\project\questions.json", "r") as file:
    questions = json.load(file)


# Shuffle questions for random order
random.shuffle(questions)

score = 0

print("🎯 Welcome to the Smart Quiz App!")
print("Answer by typing A, B, C, or D.\n")

for i, q in enumerate(questions, 1):
    print(f"Q{i}. {q['question']}")
    for option in q['options']:
        print(option)
    
    answer = input("Your answer: ").strip().upper()
    if answer == q['answer']:
        print("✅ Correct!\n")
        score += 1
    else:
        print(f"❌ Wrong! Correct answer: {q['answer']}\n")

# Final result
print("🎓 Quiz Completed!")
print(f"Your Score: {score}/{len(questions)}")

# Feedback based on performance
if score == len(questions):
    print("🌟 Excellent! You nailed it!")
elif score >= len(questions) * 0.6:
    print("👍 Good job! Keep practicing.")
else:
    print("😅 Better luck next time.")
