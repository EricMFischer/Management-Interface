app.factory('Project', function($resource){
  var Project = $resource('/projects/:id', null, { update: { method: 'PUT' }}); // declaring a custom action that extends the default $resource actions

  var JSONdata = 
  {
  "feed": [
    {
      "create_e": 1421341939,
      "msg_id": 46,
      "uid": 15,
      "version": 3,
      "media_files": [
        "text.txt"
      ],
      "inline": {
        "text.txt": "yaya\n"
      },
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421860110,
      "msg_id": 334,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "0bdb24e8c1a76a21216c7434221ac07417453915-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 4,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421862104,
      "msg_id": 370,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "8de372e011602c1f4625090a946fab562e7fee6d-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421862504,
      "msg_id": 406,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "c2eaba06b5e57774cd59b6010e90c054857d21d4-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421862651,
      "msg_id": 442,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "0f65a8b70aa2ae0e788e4e016e6b0257a6f093e9-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 3,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421863039,
      "msg_id": 478,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "90c5f7812f0b3ee22241db2f1ad369b861704ff4-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944148,
      "msg_id": 514,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "5c3cfccffd26e2f3c3cc9e2ad63603602f32c406-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944226,
      "msg_id": 550,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "fa2d86f1fa709cd89c431248af8176bd3835a416-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944406,
      "msg_id": 622,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "80fb45c8b8c4b318dfb6362f6066248f72500439-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944473,
      "msg_id": 658,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "25e14fb3ba4e83d70ed9af3293c5874c972bf948-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 1,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944641,
      "msg_id": 694,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "fd685b1d824eb57d210653994b70f3891abee68d-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421946578,
      "msg_id": 730,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "175e9f7cbee0c53e28cf04634881e2dd1bed55d4-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421946943,
      "msg_id": 766,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "3153331b54dea46bc0ab87b92c9195f0a323daf7-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421440246,
      "msg_id": 226,
      "uid": 43,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "528350e2334919060100ebd5394c0cf9be9d6a92-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1421944302,
      "msg_id": 586,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "7ce636c6b2522b6affc972aaa9bd178f176e5205-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 2,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1423241523,
      "msg_id": 910,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "4e32f1ddd8aa6ea4302179d1d360f891ac7bce38-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1423244193,
      "msg_id": 946,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "7eeef9b3ba2c43fdbb0165d891a17b6ec90a07f6-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 1,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1423233946,
      "msg_id": 802,
      "uid": 66,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "a1b037cf2620e49b0f6853df90818579d5ac8ae5-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 3,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426494156,
      "msg_id": 1793632,
      "uid": 30963,
      "size_x": 320,
      "size_y": 568,
      "version": 3,
      "media_key": "4bd553ac1d7ed79942fa9cbe60289d3cc4074d13-",
      "media_files": [
        "anchor.jpg",
        "small_square_anchor.jpg",
        "movie.mp4",
        "metadata.json"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Potato quality - above&beyond\"}"
      },
      "likes": 2005,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426511063,
      "msg_id": 1794316,
      "uid": 79,
      "version": 3,
      "media_key": "fed7bb9ccf454552bb776a8591e93e49e84d5a48-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 44,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426518760,
      "msg_id": 1794784,
      "uid": 26757,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "efc5ddb01441a57779a545e901ecb0eb4d108459-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Ecu pets\"}"
      },
      "likes": 1918,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426518997,
      "msg_id": 1794820,
      "uid": 79,
      "version": 3,
      "media_key": "c300125359e935baecc67c935591cdc2ad300650-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 49,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426522537,
      "msg_id": 1794928,
      "uid": 31102,
      "size_x": 720,
      "size_y": 1280,
      "version": 3,
      "media_key": "b9e082c1d34d7e3f203c25e0c2b52e383b821ef5-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"When u got two test the day you come back👎\"}"
      },
      "likes": 2036,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426536769,
      "msg_id": 1796224,
      "uid": 745,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "05fd4079061995105cd5fe5a70f9a16cfbad22ec-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Safety first!\"}"
      },
      "likes": 1981,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426537860,
      "msg_id": 1796404,
      "uid": 19316,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "43f9770a617778830a78a89ff9a7e12402f492ee-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Sexy Monday\"}"
      },
      "likes": 2017,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426540411,
      "msg_id": 1796512,
      "uid": 79,
      "version": 3,
      "media_key": "8d68adc6ae0d3d6f45c761633f47c504b0bcfcda-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 43,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426544720,
      "msg_id": 1797304,
      "uid": 44058,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "837c2d75b1809c7533a9c238a0c8c42ad672c3f8-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"When you're late to class\"}"
      },
      "likes": 1984,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426545711,
      "msg_id": 1797484,
      "uid": 6456,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "a27051a2a49645e051c29133c0e95bd44e39a602-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"ZTA trap car chillin'\"}"
      },
      "likes": 2018,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426545855,
      "msg_id": 1797520,
      "uid": 79,
      "version": 3,
      "media_key": "be1248711f6f8e00b4ce5c83d6d219e2f7dc85da-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 43,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426548114,
      "msg_id": 1798168,
      "uid": 15545,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "db27717f6c564e63cbb11572262fe925946fc1ca-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"All this Adderall 😏😏\"}"
      },
      "likes": 1986,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426548919,
      "msg_id": 1798456,
      "uid": 4953,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "8d65af803a1deb5318e4e66b0a81c369500c8e47-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 1903,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426551779,
      "msg_id": 1799032,
      "uid": 4953,
      "size_x": 320,
      "size_y": 568,
      "version": 3,
      "media_key": "c18baeb822be07b4d8d2b820daacb7460e1888b0-",
      "media_files": [
        "movie.mp4",
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 1849,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426553300,
      "msg_id": 1799212,
      "uid": 2014,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "76e0de82b3e1b6d9e922e457fea1920dd57ddd19-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"That feeling when you get a new script\"}"
      },
      "likes": 1996,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426553830,
      "msg_id": 1799356,
      "uid": 79,
      "version": 3,
      "media_key": "fff5fdcca8924b7c38bc372d4697ee856c67ca40-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 54,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426558626,
      "msg_id": 1800040,
      "uid": 239,
      "size_x": 320,
      "size_y": 568,
      "version": 3,
      "media_key": "321e19bd3ba270ce16a35b2e8241e3f43ee476a2-",
      "media_files": [
        "anchor.jpg",
        "small_square_anchor.jpg",
        "movie.mp4",
        "metadata.json"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"When DQ says free cone day\"}"
      },
      "likes": 2047,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426561179,
      "msg_id": 1800328,
      "uid": 79,
      "version": 3,
      "media_key": "7a332033f1a669fa98da604a1065fdab9b4be03d-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 55,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426561793,
      "msg_id": 1800400,
      "uid": 79,
      "version": 3,
      "media_key": "590da5cd33af0835e9929f841272c9bb22a8a298-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 55,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426563527,
      "msg_id": 1800580,
      "uid": 261,
      "size_x": 640,
      "size_y": 960,
      "version": 3,
      "media_key": "5f0230d5e1a4dec37c3d2891f88c288a88670cb0-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Mugnight done right\"}"
      },
      "likes": 1918,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426564173,
      "msg_id": 1800724,
      "uid": 79,
      "version": 3,
      "media_key": "3415f7a9867597cddbc120b6438d2a1432bd5aec-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 51,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426564327,
      "msg_id": 1800868,
      "uid": 67126,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "2b80be3acc590c2379cce47626b69180f75b3ea4-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"2 most important things in life #Murica #PirateNation\"}"
      },
      "likes": 1872,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426567225,
      "msg_id": 1800976,
      "uid": 70132,
      "size_x": 719,
      "size_y": 1280,
      "version": 3,
      "media_key": "c5b2815f88d8d03d87e4f530f2dcf3e3f77b4db0-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"😙💨 FTN\"}"
      },
      "likes": 1877,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426577970,
      "msg_id": 1801336,
      "uid": 95180,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "364ac5dc6e39b280a9705e717d714400b9de81ec-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"The dick too bomb\"}"
      },
      "likes": 2058,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426605746,
      "msg_id": 1802128,
      "uid": 25802,
      "size_x": 719,
      "size_y": 1280,
      "version": 3,
      "media_key": "492b177a39e7f269221b5d1db1fc4c044a64b1d8-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Happy st party's ! 🍀🍀🍀\"}"
      },
      "likes": 2249,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426606445,
      "msg_id": 1802164,
      "uid": 11512,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "2a3635499d37eec7c29350d649144d131d69543c-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"300 blackout\"}"
      },
      "likes": 1985,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426607266,
      "msg_id": 1802236,
      "uid": 4338,
      "size_x": 640,
      "size_y": 960,
      "version": 3,
      "media_key": "9f0606ee00bd802b3a4633d0f9223c70750646a5-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Happy st pattys day\"}"
      },
      "likes": 2699,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426611714,
      "msg_id": 1803640,
      "uid": 66253,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "2c915e760cfc64a05f208efb293eeb273b98d5bd-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Turn up for the nation\"}"
      },
      "likes": 1988,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426612581,
      "msg_id": 1803784,
      "uid": 78983,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "3996151ffc986e3dcf7e99b88b8a506955391d3a-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Kiss me even though I'm not Irish FTN ! 💋🍀\"}"
      },
      "likes": 1941,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426620274,
      "msg_id": 1805404,
      "uid": 1626,
      "size_x": 719,
      "size_y": 1280,
      "version": 3,
      "media_key": "2225565df6c8c58e64612f4c838c7ebcec8cdf60-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Happy St. Patty's Day\"}"
      },
      "likes": 2697,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426628268,
      "msg_id": 1807312,
      "uid": 1303,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "6cdf8ea7d519346efcfe5a030145e363d872e201-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Stoop kid won't leave her stoop\"}"
      },
      "likes": 2013,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426633610,
      "msg_id": 1815880,
      "uid": 79,
      "version": 3,
      "media_key": "ec53e2ff76188f89d3fd801a064691c8be027d3d-",
      "media_files": [
        "anchor.jpg"
      ],
      "likes": 172,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1426635274,
      "msg_id": 1816420,
      "uid": 2014,
      "size_x": 320,
      "size_y": 568,
      "version": 3,
      "media_key": "f0e52a424b3611d9248695070f41c9e81661d2ae-",
      "media_files": [
        "anchor.jpg",
        "small_square_anchor.jpg",
        "movie.mp4",
        "metadata.json"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"The Miss Flossy FTN\"}"
      },
      "likes": 2129,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p4/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1434383385,
      "msg_id": 1060498,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "cb09038f06a46f82c99fec06099def1a9b2fdcc9-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1431991340,
      "msg_id": 909118,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "d962bb0ccd753c8851825b6b5b139b2452069c90-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1436027228,
      "msg_id": 1134946,
      "uid": 72,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "550ded66886cc11b27c3e5fdd2fd201ead34a347-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1438886237,
      "msg_id": 1260514,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "ee28f70c7f42772d18a01bd9ba99cdc260837fd3-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Power in low volts\"}"
      },
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1434389279,
      "msg_id": 1060786,
      "uid": 72,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "b5cf32e226fbb5ec4c3b3cdd6696f3757592d14c-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Hello Susie\"}"
      },
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1435174483,
      "msg_id": 1098874,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "7f926108d68d57b7bb73e1fbbd3cb7785a2e7341-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"#rpi breadboard, sweet\"}"
      },
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1430505349,
      "msg_id": 782398,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "c7249b2361f62c0c2e28b07e8d53849254a70235-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "likes": 1,
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1433248106,
      "msg_id": 1000486,
      "uid": 306244,
      "size_x": 719,
      "size_y": 1280,
      "version": 3,
      "media_key": "24a52cf1a73c5d3a1b38843a0ed9d04ebc83b20d-",
      "media_files": [
        "small_square_anchor.jpg",
        "metadata.json",
        "anchor.jpg"
      ],
      "inline": {
        "metadata.json": "{\"imageTextOverlay\":\"Noles take on Dallas\"}"
      },
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1439416360,
      "msg_id": 1282726,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "c420affa0e79cb24f6ce4917f36c5a3c3956413b-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1439431659,
      "msg_id": 1283878,
      "uid": 507008,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "b4da37be4f7b418863c49f0b67fd89c0a31bf7e1-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1439483553,
      "msg_id": 1285966,
      "uid": 507008,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "23b6df01193b2bdf4f65dca8665158229f3aebdf-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440105979,
      "msg_id": 1319986,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "e778244130c6bbb5477f8ef4cc848d64b5111f7d-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440106266,
      "msg_id": 1320022,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "1fda07911e958769e57f7747b16a68fe12778a4e-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440106287,
      "msg_id": 1320058,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "8738d82049807a055e5d77dea45401019e562c0b-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440108939,
      "msg_id": 1320346,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "a18a499002625c2ba8bf75931572db4d28f0205e-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440108984,
      "msg_id": 1320382,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "37adc3619edd2a3c6d0e2f79103032528cbbb2db-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440447847,
      "msg_id": 1338202,
      "uid": 58640,
      "size_x": 640,
      "size_y": 1136,
      "version": 3,
      "media_key": "8bca0eb6e0f19dc112a42f05b6bd322e857f4516-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    },
    {
      "create_e": 1440872084,
      "msg_id": 1372366,
      "uid": 543690,
      "size_x": 719,
      "size_y": 1280,
      "version": 3,
      "media_key": "df39c9c131701206f2181828d1b41778db3aed6c-",
      "media_files": [
        "small_square_anchor.jpg",
        "anchor.jpg"
      ],
      "path_prefix": "https://cine-yeti-581681.c.cdn77.org/p10/",
      "json_class": "Msg::Model"
    }
  ],
  "refs": [
  ],
  "status": "ok"
  };

  Project.prototype.projects = [];
  JSONdata.feed.forEach(function(obj) {
    var project = {};
    project.description = obj.path_prefix + obj.media_key + 'anchor.jpg'; // thumbnail
    project.site = obj.path_prefix + obj.media_key + 'anchor.jpg'; // photo
    project.x = obj.size_x || 'N/A';
    project.y = obj.size_y || 'N/A';
    project.likes = obj.likes || 0;
    project.time = (new Date(obj.create_e * 1000)).toDateString();
    for (var i=0; i<obj.media_files.length; i++) {
      if (obj.media_files[i] === 'movie.mp4') {
        project.movie = obj.path_prefix + obj.media_key + 'movie.mp4';
      }
    }
    if (obj.media_key !== undefined) {
      Project.prototype.projects.push(project); 
    }
  });


  Project.prototype.update = function(cb) {
    // invoking $resource object initially returns an empty obj/arr
    // once data is returned from the server, obj is populated (useful, as obj is attached to rendered model)
    // 'this' is the obj we are updating
    return Project.update({ id: this.id }, this, cb);
  };
  
  Project.prototype.destroy = function(cb) {
    return Project.remove({ id: this.id }, cb);
  };

  Project.prototype.publish = function() {
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { published: true });
    });
  };

  Project.prototype.flag = function() {
    return Project.get({ id: this.id }, function(project) {
      Project.update({ id: project.id }, { flagged: true });
    });
  };

  return Project;
});