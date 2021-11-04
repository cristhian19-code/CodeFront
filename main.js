import * as monaco from 'monaco-editor'
import HTMLWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import CSSWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import JSWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

//Configuracion de Monaco Editor

window.MonacoEnvironment = {
  getWorker(_, label){
    if(label === 'html'){
      return new HTMLWorker()
    }

    if(label === 'css'){
      return new CSSWorker()
    }

    if(label === 'javascript'){
      return new JSWorker()
    }
  }
}

const optionMonacoEditor = {
  value: '',
  theme: 'vs-dark',
  fontSize: 15,
  minimap: false,
}

const htmlEditor = monaco.editor.create(document.getElementById('html'),{
  language: 'html',
  ...optionMonacoEditor
})

const cssEditor = monaco.editor.create(document.getElementById('css'),{
  language: 'css',
  ...optionMonacoEditor
})

const jsEditor = monaco.editor.create(document.getElementById('js'),{
  language: 'javascript',
  ...optionMonacoEditor
})


//Eventos del  Monaco Editor
htmlEditor.onDidChangeModelContent(MostrarCodigo)
cssEditor.onDidChangeModelContent(MostrarCodigo)
jsEditor.onDidChangeModelContent(MostrarCodigo)

//Funciones
function MostrarCodigo (){
  const htmlValue = htmlEditor.getValue()
  const cssValue = cssEditor.getValue()
  const jsValue = jsEditor.getValue()

  const template = ConvertirHTML(htmlValue,cssValue,jsValue)
  preview.setAttribute('srcdoc',template)
}

function ConvertirHTML(html,css,js) {
    return `
        <!DOCTYPE html>
        <html>
            <head>
              <style>
                ${css}
              </style>
            </head>
            <body>
                <script>${js}</script>
                ${html}
            </body>
        </html>
    `
}
