import { MyInput } from "./UI/input/MyInput"
import { MySelect } from "./UI/select/MySelect"

interface Filter {
    filter: {
        sort: string;
        query: string;
    }
    setFilter: React.Dispatch<React.SetStateAction<{
        sort: string;
        query: string;
    }>>
}

export const PostFilter = ({ filter, setFilter }: Filter) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Search...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='sorted by'
                options={[
                    { value: 'title', name: 'by name' },
                    { value: 'body', name: 'by description' },
                ]}
            />
        </div>
    )
}