export const countryMap = {
    es: 'España',
    us: 'Estados Unidos',
    ca: 'Canadá',
    gb: 'Reino Unido',
    au: 'Australia',
    de: 'Alemania',
    fr: 'Francia',
    it: 'Italia',
    jp: 'Japón',
    br: 'Brasil',
    ua: 'Ucrania',
  }

  export function toBase64 (file: File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }