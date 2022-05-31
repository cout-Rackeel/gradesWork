function letterGrdGenerator(val){
  var retval;
 switch(true){
   case val == 100 :
    retval = 1;
   break;

   case val >= 99 :
   case val >= 95 :
   retval = 2;
   break;

   case val >= 94 :
   case val >= 90 :
   retval = 3;
   break;

   case val >= 89 :
   case val >= 85 :
   retval = 4;
   break;

   case val >= 84 :
   case val >= 80 :
   retval = 5;
   break;

   case val >= 79 :
   case val >= 76 :
   retval = 6;
   break;

   case val >= 79 :
   case val >= 76 :
   retval = 6;
   break;

   case val >= 75 :
   case val >= 73 :
   retval = 7;
   break;

   case val >= 72 :
   case val >= 68 :
   retval = 8;
   break;

   case val >= 67 :
   case val >= 60 :
   retval = 9;
   break;

   case val >= 59 :
   case val >= 50 :
   retval = 10;
   break;

   case val >= 0 :
   retval = 11;
   break;

 

   default:
   retval = 'Grade not valid';
   break;
 }

 return retval;
}

module.exports = letterGrdGenerator;
