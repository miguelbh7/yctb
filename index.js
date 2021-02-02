'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] Botlike v1",
        "[2] Botlike v2",
        "[3] Borrar multimedia",
        "[4] Dejar de seguir a seguidores",
        "[5] Dejar de seguir a no seguidores",
        "[6] Seguir seguidores de cuenta objetivo",
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Botlike v1":
        const botlike = require('./botlike.js');
        await botlike();
        break;

      case "[2] Botlike v2":
        const botlike2 = require('./botlike2.js');
        await botlike2();
        break;

      case "[3] Borrar multimedia":
        const dellallphoto = require('./dellallphoto.js');
        await dellallphoto();
        break;

      case "[4] Dejar de seguir a seguidores":
        const unfollall = require('./unfollall.js');
        await unfollall();
        break;

      case "[5] Dejar de seguir a no seguidores":
        const unfollnotfollback = require('./unfollnotfollback.js');
        await unfollnotfollback();
        break;

      case "[6] Seguir seguidores de cuenta objetivo":
        const fftauto = require('./fftauto.js');
        await fftauto();
        break;
      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.red
  #     #  #####  ####### 
 #   #  #     #    #    
  # #   #          #    
   #    #          #    
   #    #          #    
   #    #     #    #    
   #     #####     #    © 2021    
}
      `);

main()
