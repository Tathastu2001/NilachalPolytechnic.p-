function getBotResponse(input) 
{
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
     } else if (input == "Hi") {
        return "Hello there!";
     } else if (input == "Hey!") {
        return "Hello there!";
     } else if (input == "How are you?") {
        return "Fine! Thank You. How may I help you?";
     } else if (input == "What's up?") {
        return "Trying to help you";
    }
    else if (input == "Where college is situated?") {
      return "Pathragadia, Patia, Bhubaneswar";}
      if (input == "Location") {
        return " Pathragadia, Patia, Bhubaneswar";
        } else if (input == "Where is the college located?") {
         return "Pathragadia, Patia, Bhubaneswar";
        }else if (input == "Where college is situated?") {
         return "Pathragadia, Patia, Bhubaneswar";
        } else if (input == "Tell me about college location") {
         return "Pathragadia, Patia, Bhubaneswar";
         }
         else if (input == "What is the course fee?") {
            return "For 1st Year: 48000, For2ndYear: 46000,For3rdYear: 46000"; 
         }
         if (input == "Fee structure") {
            return "For 1st Year: 48000,For 2nd Year: 46000, For 3rd Year: 46000"
            } 
            else if (input == "Tell me about course fee")
             {
             return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
            } 
            else if (input == "Course fee") {
             return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
            } else if (input == "What is the course fee?") {
             return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";}
             if (input == "Fee structure") 
     {
        return "For 1st Year: 48000,For 2nd Year: 46000, For 3rd Year: 46000"
        } 
        else if (input == "Tell me about course fee")
         {
         return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
        } 
        else if (input == "Course fee") {
         return "For 1st Year: 48000, For 2nd Year: 46000,For 3rd Year: 46000";
        } else if (input == "What is the course fee?") {
         return "For 1st Year: 48000,For 2nd Year: 46000,For 3rd Year: 46000";
    }
    if (input == "Courses offered") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "Types of department") {
       return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERINGELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "Department") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "Streams") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "Tell me about branches available") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   } else if (input == "How many departments are available") {
      return "CIVIL ENGINEERING,COMPUTER SCIENCE AND ENGINEERING,ELECTRICAL ENGINEERINGMECHANICAL ENGINEERING";
   }
   if (input == "Admission process is started or not") {
      return "Yes, we have started our admission process";
   } else if (input == "Admission Process") {
      return "Admission process is started";
   } else if (input == "When is the admission will start") {
      return "We have already started the admission process";
   }
   if (input == "College Hostel") {
      return "Yes we provide separate hostel for boys and girls";
   } else if (input == "Hostel for students") {
      return "We provide separate hostel for boys and girls";
   } else if (input == "Hostel") {
      return "We provide separate hostel for boys and girls";
   } else if (input == "Is hostel available") {
      return "Yes we provide separate hostel for boys and girls";
   } else if (input == "Hostel is there") {
      return "Yes we provide separate hostel for boys and girls";
   } else {
      return "Try asking something else!";
  }
}