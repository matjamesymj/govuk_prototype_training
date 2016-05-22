var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here

module.exports = router;

  // Routes for Tutorial 3
  //
  // Ineligible users are routed to 'ineligible.html'

  router.get('/my-prototype/question-2', function (req, res) {

    var eligible = req.query.eligible;

    if (eligible == "Yes"){

      res.render('my-prototype/question-2');

    } else {

      res.redirect('/my-prototype/ineligable');

    }

 
    // Write the user input to the check your answers page

  router.get('/my-prototype/check-your-answers-page', function (req, res) {

    var feat = req.query.juggling_feat;

    res.render('my-prototype/check-your-answers-page', { 'feat' : feat });
    
  });




  
    
  });
