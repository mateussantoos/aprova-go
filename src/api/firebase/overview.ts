import { db } from "./config";
import { doc, getDoc } from "firebase/firestore";
import type { OverviewDocument } from "../../types/index";

/**
 * Busca os dados do documento 'overview' no Firestore.
 */
export const getOverviewData = async (): Promise<OverviewDocument | null> => {
  try {
    const docRef = doc(db, "enem_guide", "overview");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Dados do 'overview' carregados:", docSnap.data());
      return docSnap.data() as OverviewDocument;
    } else {
      console.warn("Documento 'overview' não encontrado no Firestore!");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados do 'overview':", error);
    return null;
  }
};
