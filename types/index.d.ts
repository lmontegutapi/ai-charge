export type EmailType = {
  WELCOME: "WELCOME"
  CAMPAIGN_CREATED: "CAMPAIGN_CREATED"
  CAMPAIGN_SUMMARY: "CAMPAIGN_SUMMARY"
  PAYMENT_PROMISE: "PAYMENT_PROMISE"
  GOAL_REACHED: "GOAL_REACHED"
  INVITATION: "INVITATION"
  CUSTOM: "CUSTOM"
}

export type CallStatus = {
  SCHEDULED: "SCHEDULED"
  IN_PROGRESS: "IN_PROGRESS"
  COMPLETED: "COMPLETED"
  FAILED: "FAILED"
  NO_ANSWER: "NO_ANSWER"
  BUSY: "BUSY"
  CANCELLED: "CANCELLED"
}

export type CampaignStatus = {
  DRAFT: "DRAFT"
  ACTIVE: "ACTIVE"
  PAUSED: "PAUSED"
  COMPLETED: "COMPLETED"
  CANCELLED: "CANCELLED"
}

export type ContactStatus = {
  PENDING: "PENDING"
  IN_PROGRESS: "IN_PROGRESS"
  COMPLETED: "COMPLETED"
  FAILED: "FAILED"
}

export type InvoiceStatus = {
  DRAFT: "DRAFT"
  SENT: "SENT"
  OVERDUE: "OVERDUE"
  PAID: "PAID"
  CANCELLED: "CANCELLED"
}

export type PaymentMethod = {
  CREDIT_CARD: "CREDIT_CARD"
  BANK_TRANSFER: "BANK_TRANSFER"
  CASH: "CASH"
  OTHER: "OTHER"
}

export type PaymentType = {
  CASH: "CASH"
  CREDIT_CARD: "CREDIT_CARD"
  DEBIT_CARD: "DEBIT_CARD"
  BANK_TRANSFER: "BANK_TRANSFER"
  MERCADO_PAGO: "MERCADO_PAGO"
  UALA: "UALA"
  MODO: "MODO"
  PERSONAL_PAY: "PERSONAL_PAY"
  OTHER: "OTHER"
}

export type PaymentLinkStatus = {
  ACTIVE: "ACTIVE"
  EXPIRED: "EXPIRED"
  COMPLETED: "COMPLETED"
  CANCELLED: "CANCELLED"
}

export type TransactionStatus = {
  PENDING: "PENDING"
  PROCESSING: "PROCESSING"
  COMPLETED: "COMPLETED"
  FAILED: "FAILED"
  REFUNDED: "REFUNDED"
}

export type OrganizationStatus = {
  ACTIVE: "active"
  INACTIVE: "inactive"
}

export type OrganizationType = {
  PERSONAL: "personal"
  COMPANY: "company"
}
