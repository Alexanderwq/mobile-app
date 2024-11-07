export interface PaymentsListInterface {
  monthSubscriptions: {
    id: number,
    visit: string,
    name: string,
    created_at: string,
  }[],
}
