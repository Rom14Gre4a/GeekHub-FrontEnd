


export const ORDERSTATUS: any[] = [
    { isDoctor: true, id: 1, name: 'Submitted', code: 'submitted' },
    { isDoctor: true, id: 2, name: 'Accepted', code: 'accepted' },
    { isDoctor: true, id: 3, name: 'Design', code: 'design' },
    { isDoctor: true, id: 4, name: 'Plan', code: 'plan' },
    { isDoctor: true, id: 5, name: 'Manufacturing', code: 'manufacturing' },
    { isDoctor: true, id: 6, name: 'QC', code: 'qc' },
    { isDoctor: true, id: 7, name: 'Packaging', code: 'packaging' },
    { isDoctor: true, id: 8, name: 'Dispatched', code: 'dispatched' },
]
export const  ORDERSTATUSWIDTHAUTOMATIONS: any[] = [
    { isDoctor: true, id: 1, name: "ChangeStatusSubmitted" },
    { isDoctor: true, id: 2, name: "ChangeStatusAccepted" },
    { isDoctor: true, id: 3, name: "ChangeStatusDesign" },
    { isDoctor: true, id: 4, name: "ChangeStatusPlan" },
    { isDoctor: true, id: 5, name: "ChangeStatusManufacturing" },
    { isDoctor: true, id: 6, name: "ChangeStatusQC" },
    { isDoctor: true, id: 7, name: "ChangeStatusPackaging" },
    { isDoctor: true, id: 8, name: "ChangeStatusDispatched" },
]


export const ORDERSTATUSBYDOCTOR: any[] = [
    { isDoctor: true, id: 1, name: 'Submitted', code: 'submitted' },
    { isDoctor: true, id: 2, name: 'Accepted', code: 'accepted' },
    { isDoctor: true, id: 3, name: 'Production', code: 'production' },
    { isDoctor: true, id: 6, name: 'QC', code: 'qc' },
    { isDoctor: true, id: 8, name: 'Dispatched', code: 'dispatched' },
]


export const BASESHADE: any[] = [
    { name: "A1" },
    { name: "A2" },
    { name: "A3" },
    { name: "A3_5" },
    { name: "A4" },
    { name: "B1" },
    { name: "B2" },
    { name: "B3" },
    { name: "B4" },
    { name: "C1" },
    { name: "C2" },
    { name: "C3" },
    { name: "C4" },
    { name: "D2" },
    { name: "D3" },
    { name: "D4" },
]

export const STAGE: any[] = [
    {key: 'surgical_guide', name: "Surgical guide", value: false },
    {key: 'special_tray', name: "Special tray", value: false },
    {key: 'bite_blocks', name: "Bite blocks", value: false },
    {key: 'try_in', name: "Try-in", value: false },
    {key: 'provisional', name: "Provisional", value: false },
    {key: 'final', name: "Final ", value: false },
]



export const BASEIMPLANT: any[] = [
    { name: "Alfa Biomet 3.5mm" },
    { name: "Alfa Biomet 4.1mm" },
    { name: "Biohorizon 3.5mm" },
    { name: "Biohorizon 4.1mm" },
    { name: "Biohorizon 5mm" },
]



export const ORDERTAGLIST: any[] = [
        {
            "id": "442b10db-b635-4bdd-8aaf-08dbc01bc1dc",
            "locationId": "37773803-e1de-4564-745c-08dbafb5059c",
            "tag": "Priority",
            "isDefault": true
        },
        {
            "id": "a57c58c7-43db-47a8-8ab0-08dbc01bc1dc",
            "locationId": "37773803-e1de-4564-745c-08dbafb5059c",
            "tag": "Remake",
            "isDefault": true
        },
        {
            "id": "eb073698-0fa3-468f-8ab1-08dbc01bc1dc",
            "locationId": "37773803-e1de-4564-745c-08dbafb5059c",
            "tag": "Issue",
            "isDefault": true
        },
        {
            "id": "a03b2f45-f117-4279-8ab2-08dbc01bc1dc",
            "locationId": "37773803-e1de-4564-745c-08dbafb5059c",
            "tag": "Hold",
            "isDefault": true
        },
        {
            "id": "e72a83d2-2269-4bef-8ab3-08dbc01bc1dc",
            "locationId": "37773803-e1de-4564-745c-08dbafb5059c",
            "tag": "Pickup Request",
            "isDefault": true
        },
       
]


export enum ProductPricePer {
    Tooth =	 'Tooth',
    Arch =  'Arch',
    Product =	'Product',
  }
  

  