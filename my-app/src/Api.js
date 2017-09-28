export function searchUser(value, callback){
  /*if(value){
    let searchProfile = 'https://api.github.com/users/' + value
    fetch( searchProfile )
      .then(blob => blob.json())
      .then(data => callback(data))
  }*/

  var mockData= {
    "login": "hc",
    "id": 94355,
    "avatar_url": "https://avatars1.githubusercontent.com/u/94355?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hc",
    "html_url": "https://github.com/hc",
    "followers_url": "https://api.github.com/users/hc/followers",
    "following_url": "https://api.github.com/users/hc/following{/other_user}",
    "gists_url": "https://api.github.com/users/hc/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hc/subscriptions",
    "organizations_url": "https://api.github.com/users/hc/orgs",
    "repos_url": "https://api.github.com/users/hc/repos",
    "events_url": "https://api.github.com/users/hc/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hc/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Cédric Hourcade",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 9,
    "public_gists": 2,
    "followers": 7,
    "following": 0,
    "created_at": "2009-06-11T14:12:01Z",
    "updated_at": "2017-09-08T05:28:02Z"
  }
  callback(mockData)
}
