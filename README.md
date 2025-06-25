# 📱 Aplicação React Native

Este repositório contém o código-fonte do **frontend mobile** desenvolvido em **React Native**.

⚠️ **Importante:** Antes de rodar o aplicativo, o backend em **Python** deve estar rodando na porta **8004**.

👉 O backend é necessário para o funcionamento completo da aplicação.  
👉 O login atualmente **não está funcionando**, mas as demais telas estão acessíveis normalmente.
Devido o pouco tempo, carga horária de trabalho e a proporção da proposta, não conseguimos concluir a integração com a inteligência artificial, mas
já deixamos as telas mocadas.
Você pode checar uma versão funcional demonstrativa das telas, baixando o APK na nossa landing page

https://conextea-landing-page.vercel.app/

## 🚀 Como rodar o projeto

Siga os passos abaixo para executar a aplicação no seu ambiente local.

---

### 2️ Instale as dependências

```bash
npm install
```

ou, se preferir usar **yarn**:

```bash
yarn
```

---

### 3️⃣ Rode a aplicação

#### 📲 Para dispositivos Android (emulador ou dispositivo físico conectado)

```bash
npx react-native run-android
```

#### 🖥️ Para iniciar o Metro Bundler manualmente

```bash
npx react-native start
```

---

## ⚡ Executar o APK direto no dispositivo

Se você já tem o APK gerado (geralmente disponível na pasta `android/app/build/outputs/apk/`), basta instalar no dispositivo:

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

👉 **Lembre-se:** O dispositivo precisa estar conectado com a depuração USB habilitada.

---

## 💡 Observações

✅ Certifique-se de estar com o ambiente React Native configurado (Node.js, Java JDK, Android Studio / emulador, etc).  
✅ O Metro Bundler deve estar rodando ao executar o APK, para que o app consiga carregar o bundle JavaScript na primeira vez.

---

## 🌐 Links úteis

- [Documentação oficial do React Native](https://reactnative.dev/docs/environment-setup)
