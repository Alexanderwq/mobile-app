export interface PaymentsListInterface {
  monthSubscriptions: {
    id: number,
    visit: string,
    name: string,
    created_at: string,
    endDate: string,
  }[],
  oneVisits: {
    id: number,
    trainingName: string,
  }[],
}
