import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

interface PaginationProps {
    className?: string;
    totalItems: number;
    pageSize: number;
    currentPage: number;
    handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
    const { totalItems, pageSize } = props;
    const pageInput = React.useRef<HTMLInputElement>();
    const totalPages = Math.ceil(totalItems / pageSize);
    const [inputVal, setIntputVal] = React.useState(props.currentPage || 1);

    const handlePrevClick = () => {
        if (props.currentPage > 1) {
            props.handlePageChange(props.currentPage - 1);
            setIntputVal(props.currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (props.currentPage < totalPages) {
            props.handlePageChange(props.currentPage + 1);
            setIntputVal(props.currentPage + 1);
        }
    };


    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        e.stopPropagation();

        let newVal = inputVal;

        // Handle too low number
        if (newVal < 1) {
            newVal = 1;
        }

        // Handle too high number
        if (newVal > totalPages) {
            newVal = totalPages;
        }

        props.handlePageChange(newVal);
        setIntputVal(newVal);

        // Blur input on submit
        pageInput.current!.blur();
    };

    return (
        <form className="pagination" onSubmit={handleSubmit}>
            <button
                className="button prev"
                onClick={handlePrevClick}
                type={"button"}
                aria-label={"Previous"}
                disabled={props.currentPage <= 1}
            >
                <i className="icon">
                    <AiOutlineArrowLeft />
                </i>
            </button>
            <span className="text pageText">Page:{inputVal}</span>

            <span className="text">of {totalPages}</span>
            <button
                className="button next"
                onClick={handleNextClick}
                type={"button"}
                aria-label={"Next"}
                disabled={props.currentPage >= totalPages}
            >
                <i className="icon">
                    < AiOutlineArrowRight />
                </i>
            </button>
        </form>
    );
};

export default Pagination;
