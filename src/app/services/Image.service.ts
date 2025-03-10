import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor(private http: HttpClient) { }


    public uploadImage(image: File){
        const formData = new FormData();

        formData.append('image', image);
        console.log(formData.getAll('image'));
        return this.http.post('http://localhost:8080/imageUpload', formData);
    }
}
