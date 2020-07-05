# STEP TO BUILD AN APPLICATION

## 1: prepare folder
- run `ng new NGO-App --style=scss --routing` to use scss and adding routing automatically
- generate components: `ng g c {folder/}{component_name}`

## 2: routing
- open file `app-routing.module.js`, import routing component and add router:
```
import { PostsComponent } from './components/posts/posts.component';
{
    path: 'details/:id',
    component: DetailsComponent
}
```

## Services
- run command to generate service `ng g s {folder/}{service}`
- Service: @Injectable, Obseverble


## HTTP Client
- first, import below library to working with HTTP
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

- should create a `config` folder and store all config in there
- in file `data.service.ts`, import httpClient and create functions to work with http
- add import in `app.module.ts`
- open `/users/users.component.ts`
    + add import
    ```
    import { DataService } from '../../services/data.service';
    import { Observable } from 'rxjs';
    ```
    + ngOnInit() : 