import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "3d8906669a20171b8822c3f507c449";
    const client = new SiteClient(TOKEN);

    // validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "2125054", // ID DO MODELS DE COMUNIDADE CRIADO PELO DATO
      ...request.body,
      // title: "Comunidade de teste",
      // imageUrl: "https://avatars.githubusercontent.com/u/110004771?v=4",
      // creatorSlug: "ek1l",
    });
    console.log(TOKEN);
    console.log(registroCriado);
    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem !",
  });
}
