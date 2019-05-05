let $intro = $("#intro"),
    $1panel = $("#1-panel"),
    $2panel = $("#2-panel"),
    $3panel = $("#3-panel"),
    $topics = $("#topics");

$(document).ready(function(){

    window.open = function(){
        $intro.css('display', 'none');
        $1panel.css('display', 'none');
        $2panel.css('display', 'none');
        $3panel.css('display', 'none');
    };



chrome.tabs.query({active: true, currentWindow: true, lastFocusedWindow:true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          chrome.storage.sync.get('repos', function(data) {
              let topicstr = "";
              $intro.css('display', 'none');
              $1panel.css('display', 'none');
              $2panel.css('display', 'none');
              $3panel.css('display', 'none');
              console.log(data.repos.data);
              let name = data.repos.data[0].name.split("/");
              if(data.repos.features.length >= 1) {
                  topicstr = data.repos.features[0].label;
                  for (let i = 1; i < data.repos.features.length-1; i++) {
                     topicstr = topicstr + ", " + data.repos.features[i].label
                  }
                  topicstr = topicstr + " and " + data.repos.features[data.repos.features.length-1].label;
                  $topics.text = topicstr;
              }
              else {
                  $intro.text("Sorry, we were unable to scan for topics on this page.")
              }
              $topics.text(topicstr);
              $intro.css('display', 'block');
              $1panel.css('display', 'block');
              $("#1-user").text(name[0]).attr("href", "https://github.com/" + name[0]);
              $("#1-name").text(name[1]).attr("href", "https://github.com/" + name[0] + "/" + name[1]);
              $("#1-language").text("- " + data.repos.data[0].language);
              $("#1-description").text(data.repos.data[0].description);
              $("#1-starcount").text(data.repos.data[0].stars).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/stargazers");
              $("#1-forks").text(data.repos.data[0].forks).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/network/members");
              $("#1-watchers").text(data.repos.data[0].watchers ).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/watchers")
              if(data.repos.data[0].topics.length >= 1){
                  topicstr = "<strong>Topics: </strong>" + data.repos.data[0].topics[0];
                  for (let i = 1; i < data.repos.features.length-1; i++) {
                      topicstr = topicstr + ", " + data.repos.data[0].topics[i]
                  }
                  topicstr = topicstr + " and " + data.repos.data[0].topics[data.repos.data[0].topics.length-1];
              }
              $("#1-topics").html(topicstr);

              if(data.repos.data.length > 1) {
                  $2panel.css('display', 'block');
                  name = data.repos.data[1].name.split("/");
                  $("#2-user").text(name[0]).attr("href", "https://github.com/" + name[0]);
                  $("#2-name").text(name[1]).attr("href", "https://github.com/" + name[0] + "/" + name[1]);
                  $("#2-language").text("- " + data.repos.data[1].language);
                  $("#2-description").text(data.repos.data[1].description);
                  $("#2-starcount").text(data.repos.data[1].stars).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/stargazers");
                  $("#2-forks").text(data.repos.data[1].forks).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/network/members");
                  $("#2-watchers").text(data.repos.data[1].watchers).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/watchers");
                  if(data.repos.data[1].topics.length >= 1){
                      topicstr = "<strong>Topics: </strong>" + data.repos.data[1].topics[0];
                      for (let i = 1; i < data.repos.features.length-1; i++) {
                          topicstr = topicstr + ", " + data.repos.data[1].topics[i]
                      }
                      topicstr = topicstr + " and " + data.repos.data[1].topics[data.repos.data[1].topics.length-1];
                  }
                  $("#2-topics").html(topicstr);
              }

              if(data.repos.data.length >2) {
                  $3panel.css('display', 'block');
                  name = data.repos.data[2].name.split("/");
                  $("#3-user").text(name[0]).attr("href", "https://github.com/" + name[0]);
                  $("#3-name").text(name[1]).attr("href", "https://github.com/" + name[0] + "/" + name[1]);
                  $("#3-language").text("- " + data.repos.data[2].language);
                  $("#3-title").text(data.repos.data[2].name);
                  $("#3-description").text(data.repos.data[2].description);
                  $("#3-starcount").text(data.repos.data[2].stars).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/stargazers");
                  $("#3-forks").text(data.repos.data[2].forks).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/network/members");
                  $("#3-watchers").text(data.repos.data[2].watchers).attr("href", "https://github.com/" + name[0] + "/" + name[1] + "/watchers");
                  if(data.repos.data[2].topics.length >= 1){
                      topicstr = "<strong>Topics: </strong>" + data.repos.data[2].topics[0];
                      for (let i = 1; i < data.repos.features.length-1; i++) {
                          topicstr = topicstr + ", " + data.repos.data[2].topics[i]
                      }
                      topicstr = topicstr + " and " + data.repos.data[2].topics[data.repos.data[2].topics.length-1];
                  }
                  $("#3-topics").html(topicstr);
              }
          });
      });
  });
});
