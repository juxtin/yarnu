function injectWebViewJsForUtility() {

    let jsCode = `
      ${ jsPostPageTitle() } 
      ${ jsInjectCodesForUtility() } 
    `;
  
    return jsCode;
  }
  
  function jsPostPageTitle() {
    let jsCode = `
        function postPageTitleToYamu() {
          window.ReactNativeWebView.postMessage(document.title, "*");
        }
    `;
  
    return jsCode;
  }
  
  function jsInjectCodesForUtility() {
    let jsCode = `  
        postPageTitleToYamu();
        //window.onload = postPageTitleToYamu;
    `;
  
    return jsCode;
  }
  
  export default injectWebViewJsForUtility;