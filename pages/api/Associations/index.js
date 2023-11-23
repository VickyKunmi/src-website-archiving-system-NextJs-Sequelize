import {
    getAssociations,
    postAssociation,
    putAssociation,
    deleteAssociation
  } from "../../../db/associationsController";
  
  export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        // get all association
        getAssociations(req, res);
        break;
      case "POST":
        postAssociation(req, res);
        break;
      case "PUT":
        putAssociation(req, res);
        break;
      default:
        deleteAssociation(req, res);
        break;
    }
    
  }
  