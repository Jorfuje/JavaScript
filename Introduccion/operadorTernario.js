const boleto = "regular";
// let codigoDeAcesso;

/* if(boleto === 'vip'){
    codigoDeAcesso = 'VIP-123-456';
} else {
    codigoDeAcesso = 'REGULAR-465-789';
} */

const codigoDeAcesso = boleto === "vip" ? "VIP-123-456" : "REGULAR-465-789";

boleto === "vip"
  ? console.log("Tu boleto es de tipo VIP")
  : console.log("Tu boleto es de tipo REGULAR");

console.log(codigoDeAcesso);
