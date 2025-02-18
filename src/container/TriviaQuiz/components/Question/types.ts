export interface QuestionT {
    id: number
    value: string
    section: SectionT
    ans: string
    disable: boolean
    buttonClick: ({ ans, userAns }: { ans: string; userAns: string }) => void
}

export interface SectionT {
    a: string
    b: string
    c: string
}
