import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from './../environments/environment';

export interface IBackendResponseData {
  result: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-proj';

  // 讀取 configMap 的測試網址
  configmapUrl = environment.backendApiUrl + '/api/configmap';

  // 讀取 secret 的測試網址
  secretUrl = environment.backendApiUrl + '/api/secret';

  // 儲存回傳結果
  responseConfigmapResult;
  responseSecretResult;

  constructor(private http: HttpClient) { }

  getConfig(configUrl) {
    // now returns an Observable of Config
    return this.http.get<IBackendResponseData>(configUrl);
  }

  showConfigMapResponse() {
    this.getConfig(this.configmapUrl)
      .subscribe(resp => {
        this.responseConfigmapResult= resp.result;
    });
  }

  showSecretResponse() {
    this.getConfig(this.secretUrl)
      .subscribe(resp => {
        this.responseSecretResult= resp.result;
    });
  }

}
