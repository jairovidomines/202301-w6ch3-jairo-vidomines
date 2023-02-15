import inquirer from "inquirer";

const questions = [
  {
    name: "welcome",
    message: "Welcome to ISDI Coders, bebeloper!",
  },
  {
    type: "confirm",
    name: "first_question",
    message:
      "Do you swear to tell the truth, the whole truth and nothing but the truth?",
  },
  {
    type: "confirm",
    name: "second_question",
    message: "Do you solemnly swear to follow 'The Method'?",
  },
  {
    type: "checkbox",
    name: "third_question",
    message:
      "Remember that you are under oath... ARE YOU A TRUE BELIEVER OF THE F****** 'METHOD'?",
    choices: ["YES, SIR", "nope"],
  },
  {
    name: "fourth_question",
    message:
      "I have no further questions. May the force be with you, newbie :)",
  },
];

const askQuestions = () => {
  const answers = inquirer.prompt(questions);
  return answers;
};

const answers = askQuestions();
