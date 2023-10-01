import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCasesPLNtoUSD = [
    {amount: '100', results: '$28.57'},
    {amount: '50', results: '$14.29'},
    {amount: '400', results: '$114.29'},
    {amount: '600', results: '$171.43'}
];

const testCasesUSDtoPLN = [
    {amount: '100', results: 'PLN 350'},
    {amount: '50', results: 'PLN 175'},
    {amount: '400', results: 'PLN 1,400'},
    {amount: '600', results: 'PLN 2,100'}
];

const testCasesPLN = [
    {amount: '100', results: 'PLN 100'},
    {amount: '50', results: 'PLN 50'},
    {amount: '400', results: 'PLN 400'},
    {amount: '600', results: 'PLN 600'}
];

const testCasesUSD = [
    {amount: '100', results: '$100'},
    {amount: '50', results: '$50'},
    {amount: '400', results: '$400'},
    {amount: '600', results: '$600'}
];

const testCasesMinus = [
    {amount: '-100', results: 'Wrong value...'},
    {amount: '-50', results: 'Wrong value...'},
    {amount: '-400', results: 'Wrong value...'},
    {amount: '-600', results: 'Wrong value...'}
];

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
        for(const testObj of testCasesPLNtoUSD){
            render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
            // find field elems
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.results);
            cleanup();
        }
    }); 
    it('should render proper info about conversion when USD -> PLN', () => {
        for(const testObj of testCasesUSDtoPLN){
            render(<ResultBox from="USD" to="PLN" amount={parseInt(testObj.amount)} />);
            // find field elems
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.results);
            cleanup();
        }
    }); 
    it('should render proper info about conversion when PLN -> PLN', () => {
        for(const testObj of testCasesPLN){
            render(<ResultBox from="PLN" to="PLN" amount={parseInt(testObj.amount)} />);
            // find field elems
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.results);
            cleanup();
        }
    }); 
    it('should render proper info about conversion when USD -> USD', () => {
        for(const testObj of testCasesUSD){
            render(<ResultBox from="USD" to="USD" amount={parseInt(testObj.amount)} />);
            // find field elems
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.results);
            cleanup();
        }
    }); 
    it('should render proper info about conversion minus inputs', () => {
        for(const testObj of testCasesMinus){
            render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
            // find field elems
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.results);
            cleanup();
        }
    }); 
});