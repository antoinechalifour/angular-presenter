#Angular-presenter

/!\ IN ACTIVE DEVELOPMENT USE AT YOUR OWN RISKS

##What is it ?
Angular-presenter presentation framework based on AngularJS, enabling you to navigate through your slide using the arrows, gestures, or the remote controller.

##How to use it ?
(not "compiled" yet) Include the files of /app/slider/ in your index.js.
Then in your html page :
```
<slider>
    <div ui-view></div>
</slider>
```

Then in your main controller:
```
SlideManager.config({
  remote: true              //if you want to use remote control (more options are comming)
});
SlideManager.slides(data);  //data contains the json array
```

The array looks like that :
```
[
   {
      "name":"hello",
      "templateUrl":"app/slides/hello/hello.template.html"
   },
   {
      "name":"introducing",
      "templateUrl":"app/slides/introducing/introducing.template.html",
      "controller":"IntroducingCtrl",
      "note": "Note for slide 1."
   },
   {
      "name":"gettingstarted",
      "templateUrl":"app/slides/gettingstarted/gettingstarted.template.html",
      "note": "Here is a second note"
   }
]
```

##TODO List
* animations
* authentification for remote control ?
* better UI (both remote / default theme)
* Gruntfile for building the slider module
* switch from from to namespaces
