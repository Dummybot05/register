const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dummybot:Dummybot@study0.hfbb5dy.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.render('home');
});

var errAns = "";
app.get('/form', function(req, res){
   res.render('form', { errTick: errAns });
   errAns = "";
})

app.post('/data', function(req, res){
    const name = req.body.name;
    const fname = req.body.fname;
    const mname = req.body.mname;
    const dob = req.body.dob;
    const gender = req.body.gender;
    const email = req.body.email;
    const mob = req.body.mob;
    const fmob = req.body.fmob;
    const aadhar = req.body.aadhar;
    const pan = req.body.pan;
    const mole1 = req.body.mole1;
    const mole2 = req.body.mole2;
    const chkbx = req.body.chkbx;

    if(chkbx == "" || chkbx == undefined) {
       errAns = "Please Tick";
       res.redirect("form");
    } else {
       if(name == "" || name.length < 3) {
         errAns = "Enter valid name";
         res.redirect("form");
       } else {
          if(fname == "" || fname.length < 3) {
             errAns = "Enter valid Father name";
             res.redirect("form");
          } else {
             if(mname == "" || mname.length < 3) {
                errAns = "Enter valid Mother name";
                res.redirect("form");
             } else {
                if(dob == "") {
                   errAns = "Please choose a date";
                   res.redirect("form");
                } else {
	      	   if(gender == "" || gender == undefined) {
                      errAns = "Please choose a gender";
                      res.redirect("form");
                   } else {
   	              if(email == "" || email.length < 5) {
                         errAns = "Enter valid Email Id";
                         res.redirect("form");
                      } else {
			 if(mob == "" || mob.length < 10) {
                            errAns = "Enter valid Mobile number";
                            res.redirect("form");
                         } else {
                            if(fmob == "" || fmob.length < 10) {
                               errAns = "Enter valid Father Mobile number";
                               res.redirect("form");
                            } else {
                               if(aadhar == "" || aadhar.length < 12) {
                                  errAns = "Enter valid Aadhar number";
                                  res.redirect("form");
                               } else {
                                  if(pan == "" || pan.length < 10) {
                                     errAns = "Enter valid Pan number";
                                     res.redirect("form");
                                  } else {
       				     if(mole1 == "") {
                                        errAns = "Please Enter Mole1";
                                        res.redirect("form");
                                     } else {
                 			if(mole2 == "") {
                                           errAns = "Please Enter Mole2";
                                           res.redirect("form");
                                        } else {
//start
  async function run() {
      try {
        const database = client.db("studentDetails");
        const student = database.collection("students");
        const doc = {
           name: name,
           fname: fname,
           mname: mname,
           dob: dob,
           gender: gender,
           email: email,
           mob: mob,
           fmob: fmob,
           aadhar: aadhar,
           pan: pan,
           mole1: mole1,
           mole2: mole2,
           chkbx: chkbx
        }
        const result = await student.insertOne(doc);
        res.send("success Admission");
      } finally {
          await client.close();
      }
  }
  run().catch(console.dir);
//end
					}
				     }
				  }
			       }
		       	    }
		         }
		      }
		   }
		}
             }
          }
       }
    }
})

app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
